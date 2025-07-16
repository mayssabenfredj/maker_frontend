import React, { useState, useEffect } from "react";
import { useStore } from "../../../stores/useStore";
import AnimatedSection from "../../../components/UI/AnimatedSection";
import { productService } from "../../admin/products/services/product.service";
import { Product } from "../../admin/products/types/product";
import ShopFilters from "./components/ShopFilters";
import ShopTopBar from "./components/ShopTopBar";
import ShopProductList from "./components/ShopProductList";
import ShopEmptyState from "./components/ShopEmptyState";

const Shop: React.FC = () => {
  const { theme, language } = useStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    productService
      .getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erreur lors du chargement des produits.");
        setLoading(false);
      });
  }, []);

  // Ces options pourraient aussi venir d'une API
  const categories = [
    { id: "all", label: "Tous les produits", count: products.length },
    ...Array.from(new Set(products.map((p) => p.category))).map((cat) => ({
      id: typeof cat === "string" ? cat : cat?._id || "",
      label: typeof cat === "string" ? cat : cat?.name || "",
      count: products.filter(
        (p) =>
          (typeof p.category === "string" ? p.category : p.category?._id) ===
          (typeof cat === "string" ? cat : cat?._id)
      ).length,
    })),
  ];
  const priceRanges = [
    { id: "all", label: "Tous les prix" },
    { id: "0-25", label: "Moins de 25DT" },
    { id: "25-50", label: "25DT - 50DT" },
    { id: "50-100", label: "50DT - 100DT" },
    { id: "100+", label: "Plus de 100DT" },
  ];
  const availabilityOptions = [
    { id: "all", label: "Tous" },
    { id: "in-stock", label: "En stock" },
    { id: "pre-order", label: "Précommande" },
  ];
  const sortOptions = [
    { id: "name", label: "Nom A-Z" },
    { id: "price-low", label: "Prix croissant" },
    { id: "price-high", label: "Prix décroissant" },
    { id: "rating", label: "Mieux notés" },
    { id: "newest", label: "Plus récents" },
  ];

  // Filtres dynamiques
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      (typeof product.category === "string"
        ? product.category
        : product.category?._id) === selectedCategory;
    const matchesPriceRange =
      selectedPriceRange === "all" ||
      (selectedPriceRange === "0-25" && product.price < 25) ||
      (selectedPriceRange === "25-50" &&
        product.price >= 25 &&
        product.price < 50) ||
      (selectedPriceRange === "50-100" &&
        product.price >= 50 &&
        product.price < 100) ||
      (selectedPriceRange === "100+" && product.price >= 100);
    const inStock =
      (product as any).inStock !== undefined ? (product as any).inStock : true;
    const matchesAvailability =
      selectedAvailability === "all" ||
      (selectedAvailability === "in-stock" ? inStock : !inStock);
    return (
      matchesSearch &&
      matchesCategory &&
      matchesPriceRange &&
      matchesAvailability
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        // @ts-ignore
        return (b.rating || 0) - (a.rating || 0);
      case "newest":
        return (
          (b.createdAt ? new Date(b.createdAt).getTime() : 0) -
          (a.createdAt ? new Date(a.createdAt).getTime() : 0)
        );
      default:
        return 0;
    }
  });

  const addToCart = (productId: string) => setCart([...cart, productId]);
  const removeFromCart = (productId: string) =>
    setCart(cart.filter((id) => id !== productId));
  const isInCart = (productId: string) => cart.includes(productId);

  // Pour compatibilité avec ShopProductCard (image: string)
  const productsWithImage = sortedProducts.map((p) => ({
    ...p,
    image: p.images?.[0] || "",
  }));

  return (
    <div
      className={`min-h-screen pt-16 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section
        className={`py-20 ${
          theme === "dark" ? "bg-primary-900" : "bg-primary-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Boutique Maker Skills
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                Découvrez notre sélection de kits éducatifs, composants et
                outils pour vos projets
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <ShopFilters
              theme={theme}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRanges={priceRanges}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              availabilityOptions={availabilityOptions}
              selectedAvailability={selectedAvailability}
              setSelectedAvailability={setSelectedAvailability}
            />
          </div>
          {/* Main Content */}
          <div className="lg:w-3/4">
            <ShopTopBar
              theme={theme}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOptions={sortOptions}
              viewMode={viewMode}
              setViewMode={setViewMode}
              cartCount={cart.length}
              productCount={productsWithImage.length}
            />
            {loading ? (
              <div className="text-center py-12 text-gray-400">
                Chargement...
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">{error}</div>
            ) : productsWithImage.length === 0 ? (
              <ShopEmptyState theme={theme} />
            ) : (
              <ShopProductList
                products={productsWithImage}
                theme={theme}
                viewMode={viewMode}
                isInCart={isInCart}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

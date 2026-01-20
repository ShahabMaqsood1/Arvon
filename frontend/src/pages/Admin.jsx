import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  FolderOpen, 
  Image, 
  Sliders,
  Plus,
  Edit,
  Trash2,
  Save,
  X
} from 'lucide-react';
import { products, categories, galleryImages } from '../data/mock';
import { toast } from 'sonner';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [localProducts, setLocalProducts] = useState(products);
  const [localCategories, setLocalCategories] = useState(categories);
  const [localGallery, setLocalGallery] = useState(galleryImages);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'categories', label: 'Categories', icon: FolderOpen },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'slider', label: 'Featured Slider', icon: Sliders },
  ];

  const handleDeleteProduct = (id) => {
    setLocalProducts(localProducts.filter(p => p.id !== id));
    toast.success('Product deleted successfully');
  };

  const handleDeleteCategory = (id) => {
    setLocalCategories(localCategories.filter(c => c.id !== id));
    toast.success('Category deleted successfully');
  };

  const handleDeleteGalleryImage = (id) => {
    setLocalGallery(localGallery.filter(g => g.id !== id));
    toast.success('Image deleted successfully');
  };

  const handleToggleFeatured = (id) => {
    setLocalProducts(localProducts.map(p => 
      p.id === id ? { ...p, featured: !p.featured } : p
    ));
    toast.success('Product featured status updated');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your website content</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-md p-8">
              {/* Dashboard Tab */}
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        {localProducts.length}
                      </div>
                      <div className="text-gray-700 font-medium">Total Products</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {localCategories.length}
                      </div>
                      <div className="text-gray-700 font-medium">Categories</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {localProducts.filter(p => p.featured).length}
                      </div>
                      <div className="text-gray-700 font-medium">Featured Items</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Products Tab */}
              {activeTab === 'products' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Products</h2>
                    <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      <Plus size={20} className="mr-2" />
                      Add Product
                    </button>
                  </div>
                  <div className="space-y-4">
                    {localProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-red-600 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleToggleFeatured(product.id)}
                            className={`px-3 py-1 text-sm rounded ${
                              product.featured
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {product.featured ? 'Featured' : 'Not Featured'}
                          </button>
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories Tab */}
              {activeTab === 'categories' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
                    <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      <Plus size={20} className="mr-2" />
                      Add Category
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {localCategories.map((category) => (
                      <div
                        key={category.id}
                        className="relative group rounded-xl overflow-hidden"
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-bold text-lg">{category.name}</h3>
                          <p className="text-sm text-gray-200">{category.description}</p>
                        </div>
                        <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteCategory(category.id)}
                            className="p-2 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Tab */}
              {activeTab === 'gallery' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Gallery</h2>
                    <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      <Plus size={20} className="mr-2" />
                      Add Image
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {localGallery.map((image) => (
                      <div key={image.id} className="relative group">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleDeleteGalleryImage(image.id)}
                            className="p-2 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Slider Tab */}
              {activeTab === 'slider' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Featured Product Slider
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Products marked as "Featured" will appear in the homepage slider.
                  </p>
                  <div className="space-y-4">
                    {localProducts
                      .filter((p) => p.featured)
                      .map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

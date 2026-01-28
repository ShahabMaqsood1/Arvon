-- ARVON Database Schema
-- Run this in cPanel > phpMyAdmin

CREATE DATABASE IF NOT EXISTS arvon_db;
USE arvon_db;

-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    keywords VARCHAR(255),
    is_featured BOOLEAN DEFAULT 0,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Gallery Table
CREATE TABLE IF NOT EXISTS gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(255) NOT NULL,
    alt_text VARCHAR(200),
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Site Settings Table
CREATE TABLE IF NOT EXISTS site_settings (
    setting_key VARCHAR(100) PRIMARY KEY,
    setting_value TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Sample Data
INSERT INTO categories (name, description, image, display_order) VALUES
('Sportswear', 'High-performance athletic apparel', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800', 1),
('Casual Wear', 'Comfortable everyday clothing', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800', 2),
('Custom Apparel', 'Tailored solutions for your brand', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800', 3);

INSERT INTO products (category_id, name, description, image, keywords, is_featured, display_order) VALUES
(1, 'Performance Track Jacket', 'Lightweight, breathable track jacket with moisture-wicking technology', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600', 'jacket, athletic, performance', 1, 1),
(1, 'Pro Training Shorts', 'Flexible shorts designed for intense workouts and training sessions', 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600', 'shorts, training, athletic', 1, 2),
(2, 'Cotton Crew Neck Tee', 'Premium cotton t-shirt perfect for everyday comfort', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600', 'tshirt, casual, cotton', 0, 3),
(2, 'Relaxed Fit Hoodie', 'Cozy hoodie with modern fit and premium fabric', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600', 'hoodie, comfortable, casual', 1, 4),
(3, 'Custom Team Jersey', 'Fully customizable jerseys for teams and organizations', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600', 'custom, jersey, team', 0, 5),
(3, 'Branded Corporate Polo', 'Professional polo shirts with custom branding options', 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600', 'polo, corporate, branded', 0, 6);

INSERT INTO gallery (image, alt_text, display_order) VALUES
('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800', 'Manufacturing facility', 1),
('https://images.unsplash.com/photo-1558769132-cb1aea9c6c8c?w=800', 'Product showcase', 2),
('https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=800', 'Apparel collection', 3),
('https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800', 'Design process', 4),
('https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800', 'Quality materials', 5),
('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', 'Retail display', 6);

-- Create default admin user (username: admin, password: admin123)
-- IMPORTANT: Change this password immediately after first login!
INSERT INTO admin_users (username, password, email) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@arvon.pk');

-- Insert default site settings
INSERT INTO site_settings (setting_key, setting_value) VALUES
('site_title', 'ARVON - Premium Apparel Manufacturing'),
('site_description', 'Premium apparel manufacturing for sportswear, casual wear, and custom solutions'),
('contact_email', 'info@arvon.pk'),
('contact_phone', '+92 (xxx) xxx-xxxx'),
('contact_address', 'Pakistan'),
('business_hours', '{"monday":"9:00 AM - 6:00 PM","tuesday":"9:00 AM - 6:00 PM","wednesday":"9:00 AM - 6:00 PM","thursday":"9:00 AM - 6:00 PM","friday":"9:00 AM - 6:00 PM","saturday":"9:00 AM - 2:00 PM","sunday":"Closed"}');

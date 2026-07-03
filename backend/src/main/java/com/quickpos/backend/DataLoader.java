package com.quickpos.backend;

import com.quickpos.backend.entity.Product;
import com.quickpos.backend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final ProductRepository productRepository;

    public DataLoader(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

@Override
public void run(String... args) {

    System.out.println("DataLoader is running...");

    if (productRepository.count() == 0) {

        System.out.println("Adding sample products...");

        productRepository.save(new Product(null, "Rice 1kg", 250.0));
        productRepository.save(new Product(null, "Sugar 1kg", 320.0));
        productRepository.save(new Product(null, "Tea Packet", 180.0));
        productRepository.save(new Product(null, "Milk Powder", 1450.0));
        productRepository.save(new Product(null, "Soap", 180.0));
        productRepository.save(new Product(null, "Biscuits", 220.0));

        System.out.println("Sample Products Added");
    } else {
        System.out.println("Products already exist");
    }
}
}
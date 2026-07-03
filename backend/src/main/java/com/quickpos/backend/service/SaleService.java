package com.quickpos.backend.service;

import com.quickpos.backend.entity.Sale;
import com.quickpos.backend.entity.SaleItem;
import com.quickpos.backend.repository.SaleRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SaleService {

    private final SaleRepository saleRepository;

    public SaleService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }

    public Sale saveSale(Sale sale) {

        sale.setInvoiceNo("INV-" + System.currentTimeMillis());
        sale.setSaleDate(LocalDateTime.now());

        for (SaleItem item : sale.getItems()) {
            item.setSale(sale);
        }

        return saleRepository.save(sale);

    }

    public List<Sale> getAllSales() {
        return saleRepository.findAll();
    }

}
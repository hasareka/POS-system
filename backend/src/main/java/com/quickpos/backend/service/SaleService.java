package com.quickpos.backend.service;

import com.quickpos.backend.entity.Sale;
import com.quickpos.backend.entity.SaleItem;
import com.quickpos.backend.repository.SaleRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class SaleService {

    private final SaleRepository saleRepository;

    public SaleService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }

    public Sale saveSale(Sale sale) {

        sale.setSaleDate(LocalDateTime.now());

        sale.setInvoiceNo(
                "INV-" + System.currentTimeMillis()
        );

        for (SaleItem item : sale.getItems()) {
            item.setSale(sale);
        }

        return saleRepository.save(sale);

    }

}
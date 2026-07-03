package com.quickpos.backend.controller;

import com.quickpos.backend.entity.Sale;
import com.quickpos.backend.service.SaleService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sales")
@CrossOrigin(origins = "http://localhost:5173")
public class SaleController {

    private final SaleService saleService;

    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @PostMapping
    public Sale saveSale(@RequestBody Sale sale) {

        return saleService.saveSale(sale);

    }

}
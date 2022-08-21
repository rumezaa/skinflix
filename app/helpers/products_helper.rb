module ProductsHelper

    def product_price(product)
        number_to_currency(product.price, precision: 2)
    end


    def availability(product)
        if product.availability < 100 && product.availability < 10
            "Best Seller"
        elsif product.availability < 100
            "Limited Stock"
        end


    end
    


end

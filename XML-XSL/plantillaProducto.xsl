<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
    <head>
    </head>
    <body>
        <xsl:for-each select="productos/producto">
            <div class="col-sm-12 col-md-6 col-lg-4 p-b-50">
                <div class=shadow-car "block2">
                    <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                        <img src="{foto}" alt="IMG-PRODUCT"></img>
                        <div class="block2-overlay trans-0-4">
                            <a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4"><i class="icon-wishlist icon_heart_alt"
                                    aria-hidden="true"></i><i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i></a>
                            <div class="block2-btn-addcart w-size1 trans-0-4">
                                <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="block2-txt p-t-20 p-l-15 p-b-10">
                        <a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5"><xsl:value-of select="nombre"/></a>
                        <span class="block2-price m-text6 p-r-5"><xsl:value-of select="precio"/>&euro;</span>
                    </div>
                </div>
            </div>

        </xsl:for-each>
    </body>
</html>
</xsl:template>

</xsl:stylesheet>
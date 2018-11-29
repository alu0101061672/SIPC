<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <!-- Site made with Mobirise Website Builder v4.3.5, https://mobirise.com -->
  
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="generator" content="Mobirise v4.3.5, mobirise.com"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="shortcut icon" href="./SIPC/StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template_files/logo2.png" type="image/x-icon"/>
  <meta name="description" content="Responsive Bootstrap HTML eCommerce Template - Download Now"/>
  <title>StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template</title>
  <link rel="stylesheet" href="./SIPC/StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template_files/css" type="text/css"/>
  <link rel="stylesheet" href="./SIPC/StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template_files/mobirise-icons.css" type="text/css"/>
  <link rel="stylesheet" href="./SIPC/StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template_files/bootstrap.min.css" type="text/css"/>
  <link rel="stylesheet" href="./SIPC/StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template_files/bootstrap-grid.min.css" type="text/css"/>
  <link rel="stylesheet" href="./SIPC/StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template_files/bootstrap-reboot.min.css" type="text/css"/>
  <link rel="stylesheet" href="./SIPC/StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template_files/style.css" type="text/css"/>
  <link rel="stylesheet" href="./SIPC/StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template_files/styles.css" type="text/css"/>
  <link rel="stylesheet" href="./SIPC/StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template_files/style(1).css" type="text/css"/>
  <link rel="stylesheet" href="./SIPC/StoreM4 Mobirise Theme - HTML Bootstrap eCommerce Template_files/mbr-additional.css" type="text/css"/>
</head>
  <body>
    <section class="mbr-gallery cid-qyXC6YAH6H" once="shops" id="shop5-5j" data-rv-view="2510">
        <div class="mbr-shop" show-sidebar=""><!-- Shop Gallery -->
            <div class="row col-md-12">
                <div class="wrapper-shop-items col-xl-9">
                    <div class="mbr-gallery-row">
                        <div class="shop-items">
                            <xsl:for-each select="productos/producto">
                                <div class="mbr-gallery-item" data-tags="Creative" data-slide-to="2" data-seller="false" data-price="46" data-oldprice="92">
                                    <div class="item_overlay" data-toggle="modal"></div>
                                    <div class="galleryItem" data-toggle="modal">
                                        <div class="style_overlay"></div>
                                        <div class="img_wraper">
                                            <img alt=""  src="{foto}"/>
                                        </div>
                                        <div class="sidebar_wraper">
                                            <h4 class="item-title mbr-fonts-style mbr-text display-5"><xsl:value-of select="nombre"/></h4>
                                            <div class="price-block">
                                                <span class="shop-item-price mbr-fonts-style display-5"><xsl:value-of select="precio"/>€</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </xsl:for-each>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>
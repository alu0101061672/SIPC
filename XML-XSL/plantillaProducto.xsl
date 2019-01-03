<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:variable name="lcletters">abcdefghijklmnopqrstuvwxyz</xsl:variable>
<xsl:variable name="ucletters">ABCDEFGHIJKLMNOPQRSTUVWXYZ</xsl:variable>

<xsl:template name="capitalize">
    <xsl:param name="arg"/>
    <xsl:value-of select="concat(translate(substring($arg,1,1), $lcletters, $ucletters), substring($arg,2))"/>
</xsl:template>

<xsl:template match="/">
<html>
    <head>
    </head>
    <body>
        <xsl:for-each select="productos/producto">
        <xsl:sort select="nombre"/>
        <div class="item-slick2 p-l-15 p-r-15">
            <div class="block2 m-b-20 m-t-10 shadow-car">
            <xsl:if test="new ='false'">
                <div class="block2-img wrap-pic-w of-hidden pos-relative">
                    <img src="{foto}" alt="IMG-PRODUCT"></img>

                    <div class="block2-overlay trans-0-4">
                        <div class="block2-btn-addcart w-size1 trans-0-4">
                            <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="addToCart({./@ID},1,'{foto}','{nombre}',{precio})">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </xsl:if>
            <xsl:if test="new='true'">
                <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                    <img src="{foto}" alt="IMG-PRODUCT"></img>

                    <div class="block2-overlay trans-0-4">
                        <div class="block2-btn-addcart w-size1 trans-0-4">
                            <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="addToCart({./@ID},1,'{foto}','{nombre}',{precio})">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </xsl:if>

                <div class="block2-txt p-t-20 p-l-15 p-b-10">
                    <a id="{./@ID}" href="product-detail.html" class="text-overflow block2-name dis-block s-text3 p-b-5" onclick="seeDetails(this)">
                        <xsl:value-of select="translate(substring(nombre,1,1),
                                'abcdefghijklmnopqrstuvwxyz',
                                'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
                        <xsl:value-of select="translate(substring(nombre,2),
                                'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                                'abcdefghijklmnopqrstuvwxyz')" />
                    </a>
                    <span class="block2-price m-text6 p-r-5">
                        <xsl:value-of select="round(precio * 100) div 100" />€
                    </span>
                </div>
            </div>
        </div>
        </xsl:for-each>
    </body>
</html>
</xsl:template>

</xsl:stylesheet>
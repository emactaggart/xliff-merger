<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet 
    version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xalan="http://xml.apache.org/xslt"
    xmlns:xliff="urn:oasis:names:tc:xliff:document:1.2" 
    xmlns:mc="multicorpora:xliffeditor2:xliff-extension">
  
    <xsl:output 
        method="xml" 
        indent="yes" 
        omit-xml-declaration="no" 
        standalone="yes"
        xalan:indent-amount="4"/>

    <xsl:strip-space elements="*"/>
    
    <xsl:template match="node()|@*">
        <xsl:copy>
            <xsl:apply-templates select="node()|@*">
                <xsl:apply-templates select="@*">
                    <xsl:sort select="name()"/>
                </xsl:apply-templates>
            </xsl:apply-templates>
        </xsl:copy>
    </xsl:template>

    <xsl:template match="xliff:body">
        <xsl:copy>
            <xsl:apply-templates select="node()">
                <xsl:sort select="@id"/>
            </xsl:apply-templates>
        </xsl:copy>
    </xsl:template>

    <xsl:template match="xliff:trans-unit/*">
        <!-- <xsl:copy> -->
           <div> OK </div>
        <!-- </xsl:copy> -->
    </xsl:template>

</xsl:stylesheet>
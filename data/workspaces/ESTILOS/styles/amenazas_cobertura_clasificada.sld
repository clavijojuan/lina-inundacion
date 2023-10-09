<?xml version="1.0" encoding="utf-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd">
  <!--Generated by GeoCat Bridge for QGIS 4.4 (based on bridgestyle 0.1)-->
  <NamedLayer>
    <Name>amenazas_cobertura_clasificada</Name>
    <UserStyle>
      <Title>AMENAZAS Cobertura_Clasificada</Title>
      <FeatureTypeStyle>
        <Rule>
          <Name/>
          <ElseFilter/>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#40c8ed</CssParameter>
              <CssParameter name="fill-opacity">1.0</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#232323</CssParameter>
              <CssParameter name="stroke-width">0.9285714285714285</CssParameter>
              <CssParameter name="stroke-opacity">1.0</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Name>Arcillas</Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>COBERTURA</ogc:PropertyName>
              <ogc:Literal>Arcillas</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#e0e0e0</CssParameter>
              <CssParameter name="fill-opacity">1.0</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#232323</CssParameter>
              <CssParameter name="stroke-width">0.9285714285714285</CssParameter>
              <CssParameter name="stroke-opacity">1.0</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Name>Cantera</Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>COBERTURA</ogc:PropertyName>
              <ogc:Literal>Cantera</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#a69696</CssParameter>
              <CssParameter name="fill-opacity">0.372</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#f7f7f7</CssParameter>
              <CssParameter name="stroke-width">0.9285714285714285</CssParameter>
              <CssParameter name="stroke-opacity">0.372</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Name>Gravilleras</Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>COBERTURA</ogc:PropertyName>
              <ogc:Literal>Gravilleras</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <GraphicFill>
                <Graphic>
                  <Mark>
                    <WellKnownName>shape://slash</WellKnownName>
                    <Fill>
                      <CssParameter name="fill">#909090</CssParameter>
                      <CssParameter name="fill-opacity">1.0</CssParameter>
                    </Fill>
                    <Stroke>
                      <CssParameter name="stroke">#909090</CssParameter>
                      <CssParameter name="stroke-width">0.9285714285714285</CssParameter>
                      <CssParameter name="stroke-opacity">1.0</CssParameter>
                    </Stroke>
                  </Mark>
                  <Opacity/>
                  <Size>7.142857142857142</Size>
                  <Rotation>0</Rotation>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#909090</CssParameter>
              <CssParameter name="stroke-width">1.6428571428571428</CssParameter>
              <CssParameter name="stroke-opacity">1.0</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
              <CssParameter name="stroke-linecap">square</CssParameter>
            </Stroke>
            <PerpendicularOffset>0.0</PerpendicularOffset>
          </LineSymbolizer>
        </Rule>
        <Rule>
          <Name>Pastos degradados</Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>COBERTURA</ogc:PropertyName>
              <ogc:Literal>Pastos degradados</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <GraphicFill>
                <Graphic>
                  <Mark>
                    <WellKnownName>circle</WellKnownName>
                    <Fill>
                      <CssParameter name="fill">#b02209</CssParameter>
                      <CssParameter name="fill-opacity">1.0</CssParameter>
                    </Fill>
                    <Stroke>
                      <CssParameter name="stroke">#b02209</CssParameter>
                      <CssParameter name="stroke-width">0.7142857142857143</CssParameter>
                      <CssParameter name="stroke-opacity">1.0</CssParameter>
                    </Stroke>
                  </Mark>
                  <Opacity>1</Opacity>
                  <Size>2.142857142857143</Size>
                  <Rotation>0.0</Rotation>
                </Graphic>
              </GraphicFill>
            </Fill>
            <VendorOption name="graphic-margin">4.285714285714286</VendorOption>
          </PolygonSymbolizer>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b02209</CssParameter>
              <CssParameter name="stroke-width">1.2857142857142856</CssParameter>
              <CssParameter name="stroke-opacity">1.0</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
              <CssParameter name="stroke-linecap">square</CssParameter>
            </Stroke>
            <PerpendicularOffset>0.0</PerpendicularOffset>
          </LineSymbolizer>
        </Rule>
        <Rule>
          <Name>Tierras degradadas</Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>COBERTURA</ogc:PropertyName>
              <ogc:Literal>Tierras degradadas</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <GraphicFill>
                <Graphic>
                  <Mark>
                    <WellKnownName>shape://backslash</WellKnownName>
                    <Fill>
                      <CssParameter name="fill">#d5b43c</CssParameter>
                      <CssParameter name="fill-opacity">1.0</CssParameter>
                    </Fill>
                    <Stroke>
                      <CssParameter name="stroke">#d5b43c</CssParameter>
                      <CssParameter name="stroke-width">0.9285714285714285</CssParameter>
                      <CssParameter name="stroke-opacity">1.0</CssParameter>
                    </Stroke>
                  </Mark>
                  <Opacity/>
                  <Size>7.142857142857142</Size>
                  <Rotation>0</Rotation>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d5b43c</CssParameter>
              <CssParameter name="stroke-width">1.6428571428571428</CssParameter>
              <CssParameter name="stroke-opacity">1.0</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
              <CssParameter name="stroke-linecap">square</CssParameter>
            </Stroke>
            <PerpendicularOffset>0.0</PerpendicularOffset>
          </LineSymbolizer>
        </Rule>
        <Rule>
          <Name>Tierras desnudas</Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>COBERTURA</ogc:PropertyName>
              <ogc:Literal>Tierras desnudas</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#ffb266</CssParameter>
              <CssParameter name="fill-opacity">0.589</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#232323</CssParameter>
              <CssParameter name="stroke-width">0.9285714285714285</CssParameter>
              <CssParameter name="stroke-opacity">0.589</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Name>Tierras desnudas y degradadas</Name>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>COBERTURA</ogc:PropertyName>
              <ogc:Literal>Tierras desnudas y degradadas</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <GraphicFill>
                <Graphic>
                  <Mark>
                    <WellKnownName>shape://slash</WellKnownName>
                    <Fill>
                      <CssParameter name="fill">#994c00</CssParameter>
                      <CssParameter name="fill-opacity">1.0</CssParameter>
                    </Fill>
                    <Stroke>
                      <CssParameter name="stroke">#994c00</CssParameter>
                      <CssParameter name="stroke-width">0.9285714285714285</CssParameter>
                      <CssParameter name="stroke-opacity">1.0</CssParameter>
                    </Stroke>
                  </Mark>
                  <Opacity/>
                  <Size>7.142857142857142</Size>
                  <Rotation>0</Rotation>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>
          <PolygonSymbolizer>
            <Fill>
              <GraphicFill>
                <Graphic>
                  <Mark>
                    <WellKnownName>shape://backslash</WellKnownName>
                    <Fill>
                      <CssParameter name="fill">#994c00</CssParameter>
                      <CssParameter name="fill-opacity">1.0</CssParameter>
                    </Fill>
                    <Stroke>
                      <CssParameter name="stroke">#994c00</CssParameter>
                      <CssParameter name="stroke-width">0.9285714285714285</CssParameter>
                      <CssParameter name="stroke-opacity">1.0</CssParameter>
                    </Stroke>
                  </Mark>
                  <Opacity/>
                  <Size>7.142857142857142</Size>
                  <Rotation>0</Rotation>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#994c00</CssParameter>
              <CssParameter name="stroke-width">1.6428571428571428</CssParameter>
              <CssParameter name="stroke-opacity">1.0</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
              <CssParameter name="stroke-linecap">square</CssParameter>
            </Stroke>
            <PerpendicularOffset>0.0</PerpendicularOffset>
          </LineSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
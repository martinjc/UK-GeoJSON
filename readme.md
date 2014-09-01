# GeoJSON & TopoJSON collection of UK boundary data

This archive contains both GeoJSON and TopoJSON files of data for UK boundaries, ideal for creating choropleth maps of UK areas.

All data is converted from the generalised clipped boundaries provided by the Office of National Statistics and Ordnance Survey. Data has been converted to GeoJSON from original shapefiles using ogr2ogr, then converted to TopoJSON using topojson. 


## Folder Structure

The json folder contains all data. The boundary files are organised by the lowest level boundary held within the files, and named according to the highest level boundary. As an example, the 'oa' folder contains boundary files for Output Areas. The Output Areas are collected together individually, in Lower Layer Super Output Areas, Middle Layer Super Output Areas and Local Area Districts.

Anyone interested in the hierarchical structure of geographical data in the UK should take a look at this very good infographic: https://theidpblog.files.wordpress.com/2014/08/hierarchical_representation_of_uk_statistical_geographies_july_2014.pdf


### Current Layout

json
  - oa



## Licence Information

GeoJSON and TopoJSON UK Boundary Data by Martin Chorley is licensed under a 
Creative Commons Attribution 4.0 International License.
 
To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.

Attribution can be provided by linking back to the Github repository 
https://github.com/martinjc/UK-GeoJson or to http://martinjc.com

-----------------------------------------------------------------------------------------------
Contains Ordnance Survey data © Crown copyright and database right [2014]. Ordnance Survey data 
covered by OS OpenData Licence (see pdf in repository). Any further sub-licences must retain 
this attribution.



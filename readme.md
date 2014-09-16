# GeoJSON & TopoJSON collection of UK boundary data

This archive contains both GeoJSON and TopoJSON files of data for UK boundaries, ideal for creating choropleth maps of UK areas.

All data is converted from the generalised clipped boundaries provided by the Office of National Statistics and Ordnance Survey. Data has been converted to GeoJSON from original shapefiles using ogr2ogr, then converted to TopoJSON using topojson. 

Data is organised according to the geographical hierarchy to which it belongs (see below), then by area of the UK covered.

## Folder Structure

Data in the folders contains the following boundary information:


| Folder | Description |
|:--------:|:-------------|
|json/administrative|areas broken down into Local Authority Districts (LAD)  |
|json/electoral     |areas broken down into European Electoral Regions (EER), Westminster Parliamentary Constituencies (WPC), and Electoral Wards. Also contains data files for Wards and Westminster Parliamentary Constituencies collected by Local Authority District. Contains Scottish Parliamentary Constituencies and Scottish Parliamentary Regions for Scotland and Welsh Assembly Constituencies and Welsh Assembly Regions for Wales|
|json/eurostat      |Eurostat boundaries (NUTS level 1 & 2) for England, Scotland and Wales |
|json/statistical   |Statistical areas. Contains Output Areas, Lower Layer Super Output Areas, and Middle Layer Super Output Areas by LAD for England and Wales, and Output Areas gathered by LSOA and MSOA. Also contains Output Areas, Data Zones and Intermediate Data Zones by LAD for Scotland |

The naming convention for files depends on what data is present in the file. 
* A file containing all of one class of data for a region will be in a folder named for that region, with the file named for the class of data. So, for example, eng/wards.json contains all the parliamentary wards for England. 
* Data grouped by a sub-class will be in a folder describing the grouping, in a file named for the ID of the sub-class. So, for example, eng/wards_by_lad contains data files describing Parliamentary Wards, grouped by Local Authority District. eng/wards_by_lad/E06000001.json contains the Parliamentary Wards for Hartlepool.
* a topo_ prefix denotes that the file contains TopoJSON. No prefix denotes GeoJSON.



Anyone interested in the hierarchical structure of geographical data in the UK should take a look at this very good infographic: https://theidpblog.files.wordpress.com/2014/08/hierarchical_representation_of_uk_statistical_geographies_july_2014.pdf


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



# UPDATE - 7/12/16

The [new ONS geoportal](http://geoportal.statistics.gov.uk/) now has easily downloadable GeoJSON versions of boundary data. It may be easier to find more up to date data there than using the versions in this repository.

I'll continue to keep this repo as up to date as I can, as currently the ONS is not providing TopoJSON versions of the boundaries, and also some NI data is found at other sources, so I think it's fairly useful to keep a repo with the whole of the UK data in one place

# GeoJSON & TopoJSON collection of UK boundary data

This archive contains both GeoJSON and TopoJSON files of data for UK boundaries, ideal for creating choropleth maps of UK areas.

All data is converted from the generalised clipped boundaries provided by the Office of National Statistics, Ordnance Survey and Ordnance Survey of Northern Ireland. Data has been converted to GeoJSON from original shapefiles using ogr2ogr, then converted to TopoJSON using topojson. 

Data is organised according to the geographical hierarchy to which it belongs (see below), then by area of the UK covered.

An easily browsable site, with links to downloadable topoJSON is available at http://martinjc.github.io/UK-GeoJSON/

## Folder Structure

Data in the folders contains the following boundary information:


| Folder | Description |
|:--------:|:-------------|
|json/administrative|areas broken down into Local Authority Districts (LAD) (Local Government District (LGD) in Northern Ireland) |
|json/electoral     |areas broken down into European Electoral Regions (EER), Westminster Parliamentary Constituencies (WPC), and Electoral Wards. Also contains data files for Wards and Westminster Parliamentary Constituencies collected by Local Authority District. Contains Scottish Parliamentary Constituencies and Scottish Parliamentary Regions for Scotland and Welsh Assembly Constituencies and Welsh Assembly Regions for Wales. Contains Northern Ireland District Electoral Areas (DEA), also collected by Local Government District. Northern Ireland Assembly Area boundaries are analogous with NI Westminster Parliamentary Constituencies |
|json/eurostat      |Eurostat boundaries (NUTS level 1 & 2) for England, Scotland and Wales |
|json/statistical   |Statistical areas. Contains Output Areas, Lower Layer Super Output Areas, and Middle Layer Super Output Areas by LAD for England and Wales, and Output Areas gathered by LSOA and MSOA. Also contains Output Areas, Data Zones and Intermediate Data Zones by LAD for Scotland |
|csv | For points rather than areas. Contains lat and lon for the stadium of every team who played in the EPL or won the top-flight |

The naming convention for files depends on what data is present in the file. 
* A file containing all of one class of data for a region will be in a folder named for that region, with the file named for the class of data. So, for example, eng/wards.json contains all the parliamentary wards for England. 
* Data grouped by a sub-class will be in a folder describing the grouping, in a file named for the ID of the sub-class. So, for example, eng/wards_by_lad contains data files describing Parliamentary Wards, grouped by Local Authority District. eng/wards_by_lad/E06000001.json contains the Parliamentary Wards for Hartlepool.
* a topo_ prefix denotes that the file contains TopoJSON. No prefix denotes GeoJSON.



Anyone interested in the hierarchical structure of geographical data in the UK should take a look at the very good infographics provided by the ONS: http://geoportal.statistics.gov.uk/datasets?q=Hierarchical+Representation+of+UK+Statistical+Geographies&sort_by=name&sort_order=asc


## Licence Information
-----------------------------------------------------------------------------------------------
Contains Ordnance Survey, Office of National Statistics, National Records Scotland and LPS Intellectual Property data © Crown copyright and database right [2016]. Data licensed under the terms of the Open Government Licence (http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3). Ordnance Survey data covered by OS OpenData Licence.  Any further sub-licences must retain this attribution.



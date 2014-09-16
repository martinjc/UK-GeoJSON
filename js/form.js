
function update_lad_select() {
    var top_level_select = document.getElementById('top_level');
    var area = top_level_select.options[top_level_select.selectedIndex].value;

    options_string = '<option value="national">National</option><option disabled>──────────</option>';
    if(area === 'eng') {
        for (var key in e_lads) {
            if (e_lads.hasOwnProperty(key)) {
                options_string += '<option value=' + key + '>' + e_lads[key] + '</option>';
            }
        }
    } else if(area === 'sco') {
        for (var key in s_lads) {
            if (s_lads.hasOwnProperty(key)) {
                options_string += '<option value=' + key + '>' + s_lads[key] + '</option>';
            }
        }
    } else if(area === 'wal') {
        for (var key in w_lads) {
            if (w_lads.hasOwnProperty(key)) {
                options_string += '<option value=' + key + '>' + w_lads[key] + '</option>';
            }
        } 
    }
    d3.select('#lad').html(options_string);
}


function update_resolution_select() {
    var top_level_select = document.getElementById('top_level');
    var area = top_level_select.options[top_level_select.selectedIndex].value;

    var lad_select = document.getElementById('lad');
    var lad = lad_select.options[lad_select.selectedIndex].value;   

    options_string = '';
    if(lad === 'national') {
        options_string += '<option value="eer">European Electoral Regions</option><option value="wpc">Westminster Parliamentary Constituencies</option><option value="wards">Westminster Parliamentary Wards</option><option value="lad">Local Authority Districts</option>';
        if(area === 'wal') {
            options_string += '<option value = "nawc">National Assembly Wales Constituencies</option>';
            options_string += '<option value = "nawer">National Assembly Wales Electoral Regions</option>';
        } else if(area === 'sco') {
            options_string += '<option value = "spc">Scottish Parliament Constituencies</option>';
            options_string += '<option value = "sper">Scottish Parliament Electoral Regions</option>';            
        }
    } else {
        options_string += '<option value="wpc">Westminster Parliamentary Constituencies</option><option value="wards">Westminster Parliamentary Wards</option>';
        if(area === 'eng' || area === 'wal') {
            options_string += '<option value="msoa">Middle Layer Super Output Areas</option>';
            options_string += '<option value="lsoa">Lower Layer Super Output Areas</option>';
        } else if (area === 'sco') {
            options_string += '<option value="idz">Intermediate Data Zones</option>';
            options_string += '<option value="dz">Data Zones</option>';
        }
        options_string += '<option value="oa">Output Areas</option>';
    }
    d3.select('#resolution').html(options_string);
}


function change_area() {
    d3.select('#download').html("");
    var resolution_select = document.getElementById('resolution');
    units = resolution_select.options[resolution_select.selectedIndex].value;

    var top_level_select = document.getElementById('top_level');
    var area = top_level_select.options[top_level_select.selectedIndex].value;

    var lad_select = document.getElementById('lad');
    var lad = lad_select.options[lad_select.selectedIndex].value;

    var f;
    if(lad === 'national') {
        var f = 'json/' + area + '/topo_' + units + '.json';
        d3.select('#download').attr('href', f).attr('target', '_blank').text('download topoJSON');
        load_data(f, units);
    } else {
        var f = 'json/' + area + '/' + units + '_by_lad/topo_' + lad + '.json';
        d3.select('#download').attr('href', f).attr('target', '_blank').text('download topoJSON');
        load_data(f, lad);
    }
}

d3.select('#lad').on('change', function(){
    update_resolution_select();
    change_area();
});

d3.select("#top_level").on('change', function(){
    update_lad_select();
    update_resolution_select();
    change_area();
});

d3.select("#resolution").on('change', function(){
    change_area();
});

update_lad_select();
change_area();


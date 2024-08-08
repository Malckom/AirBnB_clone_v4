$(document).ready(function() {
    let checkedAmenities = [];

    $('input[type="checkbox"]').change(function() {
        let amenityId = $(this).data('id');
        let amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            checkedAmenities.push(amenityId);
            $('.amenities h4').text(checkedAmenities.map(id => $(`li input[data-id="${id}"]`).data('name')).join(', '));
        } else {
            let index = checkedAmenities.indexOf(amenityId);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
            $('.amenities h4').text(checkedAmenities.map(id => $(`li input[data-id="${id}"]`).data('name')).join(', '));
        }
    });
});
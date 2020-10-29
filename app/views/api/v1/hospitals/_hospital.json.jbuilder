json.id hospital.id
json.name hospital.name

json.body do
    json.country hospital.country
    json.address hospital.address
    json.image hospital.image
    json.slug hospital.slug
end
json.reviews do
    json.reviews_all hospital.reviews
end
json.dates do
    json.created_at hospital.created_at
    json.updated_at hospital.updated_at
end
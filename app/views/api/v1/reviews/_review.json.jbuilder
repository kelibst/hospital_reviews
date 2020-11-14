json.id review.id
json.name review.reviewer_name

json.body do
    json.title review.title
    json.description review.description
    
    json.score review.score
end
json.dates do
    json.created_at review.created_at
    json.updated_at review.updated_at
end
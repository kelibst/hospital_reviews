# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

Hospital.create([
        {
            name: "HO Royal Hospital",
            country: "Ghana", 
            address: " ROYAL HOSPITAL, Ho",
            image: "https://www.royalhospitalho.com/my_uploads/2020/03/302bff67-415f-4eb6-b61e-ea95c263635c.jpg"
        },
        {
            name: "HO Polyclinic",
            country: "Ghana", 
            address: "Off Ho - Denu Road",
            image: "https://www.royalhospitalho.com/my_uploads/2020/03/302bff67-415f-4eb6-b61e-ea95c263635c.jpg"
        },
        {
            name: "HO Rabito",
            country: "Ghana", 
            address: "Off Ho - Adidome Road",
            image: "https://www.royalhospitalho.com/my_uploads/2020/03/302bff67-415f-4eb6-b61e-ea95c263635c.jpg"
        },
        {
            name: "HO Teaching Hospital",
            country: "Ghana", 
            address: "Off Ho - Denu Road",
            image: "https://www.royalhospitalho.com/my_uploads/2020/03/302bff67-415f-4eb6-b61e-ea95c263635c.jpg"
        }
])

Review.create([
    {
        reviewer_name: "Keli",
        title: "Great Hospital",
        description: "It was a really great hospital",
        score: 4,
        hospital_id: 1
    },
    {
        reviewer_name: "Keli",
        title: "Not so great Hospital",
        description: "It was a really not good hospital",
        score: 2,
        hospital_id: 2
    }
])

10.times do
    Item.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f,
      departments_id: '1'
    )
  end

puts 'seeded'

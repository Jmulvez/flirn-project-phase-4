class Game < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    validates :title, presence: true
    validates :title, uniqueness: true
    validates :image_url, presence: true
    validates :description, presence: true
    validates :description, length: { in: 10..3000 }
    validates :developer, presence: true
end

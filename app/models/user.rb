class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :games, through: :reviews
    validates :username, presence: true
    validates :username, length: { in: 3..15 }
    validates :username, uniqueness: true
    validates :password_digest, presence: true
end

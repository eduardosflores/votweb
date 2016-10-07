class SessionItem < ApplicationRecord
  include Utils::Searching
  acts_as_paranoid

  belongs_to :author, class_name: 'Councillor', foreign_key: :councillor_id
  belongs_to :session, class_name: 'PlenarySession', foreign_key: :plenary_session_id
  has_one :poll

  enum acceptance: [:not_voted, :approved, :rejected]

  searching :title

  scope :by_acceptance, -> (acceptance) {
    where(acceptance: acceptances[acceptance]) if acceptance.present?
  }

  validates :title, :author, :acceptance, presence: true
end
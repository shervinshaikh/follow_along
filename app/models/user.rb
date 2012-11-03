class User < ActiveRecord::Base

  attr_accessible :full_name, :email, :password, :password_confirmation

  has_secure_password

  validates :full_name,
    presence: true,
    length: {maximum: 50}

  valid_email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email,
    presence: true,
    format: { with: valid_email_regex },
    uniqueness: { case_sensitive: false }

  validates :password, presence: { on: :create },
                       length: { minimum: 5 }, :if => :password_digest_changed?

  before_create :generate_auth_token


  def as_json(options={})
    options[:except] = [:password_digest, :auth_token, :updated_at]
    super(options)
  end

  def first_name
    full_name.split(" ").first
  end

  def last_name
    full_name.split(" ").last
  end

  private

  def generate_auth_token
    self.auth_token = SecureRandom.urlsafe_base64
  end

  def sum_amounts(expenses)
    expenses.map(&:amount).inject(&:+) || 0
  end

end

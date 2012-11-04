class Student < User
  # attr_accessible :title, :body
  
  attr_accessible :full_name
  
  validates :full_name,
    presence: true,
    length: {maximum: 50}
    
    
  def first_name
    full_name.split(" ").first
  end

  def last_name
    full_name.split(" ").last
  end
  
end

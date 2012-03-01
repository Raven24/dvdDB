class Ownership < ActiveRecord::Base

  belongs_to :medium
  belongs_to :user

  belongs_to :format
  
end

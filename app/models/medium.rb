class Medium < ActiveRecord::Base

  validates :title, :presence => true
  has_and_belongs_to_many :genres
  
  has_many :images
  accepts_nested_attributes_for :images

  has_many :ownerships, :conditions => proc{ [ "private = :private", {:private => false}] }
  has_many :users, :through => :ownerships

  def cover?
    !images.empty?
  end

  def cover
    images.first.file
  end

  def cover_url(*version)
    images.first.file.url(*version)
  end
  
end

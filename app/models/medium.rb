class Medium < ActiveRecord::Base

  validates :title, :presence => true
  has_and_belongs_to_many :languages
  has_and_belongs_to_many :genres

  has_many :images
  accepts_nested_attributes_for :images

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

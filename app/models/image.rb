class Image < ActiveRecord::Base
    mount_uploader :file, CoverUploader
    validates_presence_of :file
end

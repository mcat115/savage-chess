class BoardSaveSerializer < ActiveModel::Serializer
  attributes :id, :position, :title
  
  belongs_to :user
end

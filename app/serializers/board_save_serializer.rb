class BoardSaveSerializer < ActiveModel::Serializer
  attributes :id, :position, :title, :created_at
  
  belongs_to :user
end

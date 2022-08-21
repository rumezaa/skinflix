class TagsController < ApplicationController
    validates :name, presence: true, uniqueness: true
end

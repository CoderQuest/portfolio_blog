class PortfolioController < ApplicationController
  def index
  	@blogs = Blog.all
  end
end

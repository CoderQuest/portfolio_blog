class BlogsController < ApplicationController
  def index
  	@blogs = Blog.all
  end

  def show
  	@blog = Blog.find(params[:id])
  end

  def new
  	@blog = Blog.new
  end
  	

  def create
  	@blog = Blog.create(blog_params)
  	redirect_to :back
  end

  private

  def blog_params
  	params.require(:blog).permit(:avatar, :title, :content)
  end
end

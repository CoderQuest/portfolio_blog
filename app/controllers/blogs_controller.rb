class BlogsController < ApplicationController
  def index
  	@blogs = Blog.all
  end

  def show
  	@blog = Blog.find(params[:id])
  end

  def new
  	@presenting = {
      blogs: Blog.last(4).reverse,
      form: {
        action: blogs_path,
        csrf_param: request_forgery_protection_token,
        csrf_toke: form_authenticity_token
      }
    }
  end
  	

  def create  #this one handles both ajax& none-ajax scenarios
    @blog = Blog.new(blog_params)
    @blog.save

    if request.xhr?
      render json: Blog.last(4)
    else
      redirect_to blogs_path
    end
  	
  end

  private

  def blog_params
  	params.require(:blog).permit(:title, :content)
  end
end

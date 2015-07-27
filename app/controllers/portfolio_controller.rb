class PortfolioController < ApplicationController
  def index
  	@blogs = Blog.order('created_at ASC').last(4)
  end

  def create
  	@portfolio = Portfolio.create(portfolio_params)
  end

  private

  def portfolio_params
  	params.require(:portfolio).permit(:avatar, :title, :content)
  end
end

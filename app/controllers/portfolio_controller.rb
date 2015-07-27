class PortfolioController < ApplicationController
  def index
  	@blogs = Blog.last(4).reverse
  end

  def create
  	@portfolio = Portfolio.create(portfolio_params)
  end

  private

  def portfolio_params
  	params.require(:portfolio).permit(:avatar, :title, :content)
  end
end

module  Api
    module V1
        class ReviewsController < ApplicationController
            
          before_action :set_review, only: [:show, :edit, :update, :destroy]
          protect_from_forgery with: :null_session
          def index
            @reviews = Review.all
          end

          def show
          end

          def edit
          end

          def create 
            review = Review.new(reviews_params)
              if review.save
                    render json: review, status: :created
              else
                    render json: { error: review.errors }, status: :unproccessable_entity
              end
          end

          def update 
            if @review.update(reviews_params)
                    render json: @review, status: :created
            else
                    render json: { error: @review.errors }, status: :unprocessable_entity 
            end
          end

          def destroy 
            if @review.destroy
              head :no_content
            else
              render json: { error: @review.errors }, status: :unproccessable_entity
            end
          end

          private 

          def set_review
            @review = Review.find(params[:id])
          end

          def reviews_params
            params.require(:hospital).permit(:revier_name, :title, :description, :score)
          end

        end
    end
end
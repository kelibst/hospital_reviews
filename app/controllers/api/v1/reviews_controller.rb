module  Api
    module V1
        class ReviewsController < ApplicationController  
          before_action :set_review, only: [:edit, :update, :destroy]
          protect_from_forgery with: :null_session
          def index
            @reviews = Review.all.ordered_by_most_recent
          end

          def show
            @review = hospital.reviews.all.ordered_by_most_recent
          end

          def edit
          end

          def create 
            review = hospital.reviews.new(reviews_params)
              if review.save
                    render json: review, status: :created
              else
                    render json: { error: review.errors }, status: 422
              end
          end

          def update
            if @review.update(reviews_params)
              render json: @review, status: :created
            else
              render json: { error: @review.errors }, status: 422 
            end
          end

          def destroy 
            if @review.destroy
              head :no_content
            else
              render json: { error: @review.errors }, status: 422
            end
          end

          private 

          def hospital
            @hospital ||= Hospital.find(params[:hospital_id])
          end

          def set_review
            @review = Review.find(params[:id])
          end

          def reviews_params
            params.require(:review).permit(:reviewer_name, :title, :description, :score, :hospital_id)
          end

        end
    end
end
module  Api
  module V1
    class HospitalsController < ApplicationController
      before_action :set_hospital, only: [:show, :edit, :update, :destroy]
        protect_from_forgery with: :null_session
      def index
        @hospitals = Hospital.all
      end

      def show
      end

      def edit
      end

      def create 
            hospital = Hospital.new(hospitals_params)
            if hospital.save
                render json: hospital, status: :created
            else
                render json: hospital.errors, status: :unproccessable_entity
            end
      end

        def update 
            if @hospital.update(hospitals_params)
                render json: @hospital, status: :created
            else
                render json: @hospital.errors, status: :unproccessable_entity
            end
        end

        def destroy 
            if @hospital.destroy
                head :no_content
            else
                render json: @hospital.errors, status: :unproccessable_entity
            end
        end

        private 
        def set_hospital
            @hospital = Hospital.find(params[:id])
        end

        def hospitals_params
            params.require(:hospital).permit(:name, :country, :address, :image )
        end

    end
  end
end
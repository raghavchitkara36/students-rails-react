class MystudentsController < ApplicationController
  before_action :set_mystudent, only: [:show, :update, :destroy]

  # GET /mystudents
  def index
    @mystudents = Mystudent.all.order(roll_number: :asc)

    render json: @mystudents
  end

  # GET /mystudents/1
  def show
    render json: @mystudent
  end

  # POST /mystudents
  def create
    @mystudent = Mystudent.new(mystudent_params)

    if @mystudent.save
      render json: @mystudent, status: :created, location: @mystudent
    else
      render json: @mystudent.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /mystudents/1
  def update
    if @mystudent.update(mystudent_params)
      render json: @mystudent
    else
      render json: @mystudent.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mystudents/1
  def destroy
    @mystudent.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mystudent
      @mystudent = Mystudent.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def mystudent_params
      params.require(:mystudent).permit(:roll_number, :name, :email, :phone)
    end
end

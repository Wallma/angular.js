class VegansController < ApplicationController
  before_action :set_vegan, only: [:show, :edit, :update, :destroy]

  # GET /vegans
  # GET /vegans.json
  def index
    @vegans = Vegan.all
  end

  # GET /vegans/1
  # GET /vegans/1.json
  def show
  end

  # GET /vegans/new
  def new
    @vegan = Vegan.new
  end

  # GET /vegans/1/edit
  def edit
  end

  # POST /vegans
  # POST /vegans.json
  def create
    @vegan = Vegan.new(vegan_params)

    respond_to do |format|
      if @vegan.save
        format.html { redirect_to @vegan, notice: 'Vegan was successfully created.' }
        format.json { render :show, status: :created, location: @vegan }
      else
        format.html { render :new }
        format.json { render json: @vegan.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vegans/1
  # PATCH/PUT /vegans/1.json
  def update
    respond_to do |format|
      if @vegan.update(vegan_params)
        format.html { redirect_to @vegan, notice: 'Vegan was successfully updated.' }
        format.json { render :show, status: :ok, location: @vegan }
      else
        format.html { render :edit }
        format.json { render json: @vegan.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vegans/1
  # DELETE /vegans/1.json
  def destroy
    @vegan.destroy
    respond_to do |format|
      format.html { redirect_to vegans_url, notice: 'Vegan was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vegan
      @vegan = Vegan.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def vegan_params
      params.require(:vegan).permit(:name, :language_id)
    end
end

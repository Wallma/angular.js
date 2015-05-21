class SexualsController < ApplicationController
  before_action :set_sexual, only: [:show, :edit, :update, :destroy]

  # GET /sexuals
  # GET /sexuals.json
  def index
    @sexuals = Sexual.all
  end

  # GET /sexuals/1
  # GET /sexuals/1.json
  def show
  end

  # GET /sexuals/new
  def new
    @sexual = Sexual.new
  end

  # GET /sexuals/1/edit
  def edit
  end

  # POST /sexuals
  # POST /sexuals.json
  def create
    @sexual = Sexual.new(sexual_params)

    respond_to do |format|
      if @sexual.save
        format.html { redirect_to @sexual, notice: 'Sexual was successfully created.' }
        format.json { render :show, status: :created, location: @sexual }
      else
        format.html { render :new }
        format.json { render json: @sexual.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sexuals/1
  # PATCH/PUT /sexuals/1.json
  def update
    respond_to do |format|
      if @sexual.update(sexual_params)
        format.html { redirect_to @sexual, notice: 'Sexual was successfully updated.' }
        format.json { render :show, status: :ok, location: @sexual }
      else
        format.html { render :edit }
        format.json { render json: @sexual.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sexuals/1
  # DELETE /sexuals/1.json
  def destroy
    @sexual.destroy
    respond_to do |format|
      format.html { redirect_to sexuals_url, notice: 'Sexual was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sexual
      @sexual = Sexual.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sexual_params
      params.require(:sexual).permit(:name, :language_id)
    end
end

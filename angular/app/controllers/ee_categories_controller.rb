class EeCategoriesController < ApplicationController
  before_action :set_ee_category, only: [:show, :edit, :update, :destroy]

  # GET /ee_categories
  # GET /ee_categories.json
  def index
    @ee_categories = EeCategory.all
  end

  # GET /ee_categories/1
  # GET /ee_categories/1.json
  def show
  end

  # GET /ee_categories/new
  def new
    @ee_category = EeCategory.new
  end

  # GET /ee_categories/1/edit
  def edit
  end

  # POST /ee_categories
  # POST /ee_categories.json
  def create
    @ee_category = EeCategory.new(ee_category_params)

    respond_to do |format|
      if @ee_category.save
        format.html { redirect_to @ee_category, notice: 'Ee category was successfully created.' }
        format.json { render :show, status: :created, location: @ee_category }
      else
        format.html { render :new }
        format.json { render json: @ee_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ee_categories/1
  # PATCH/PUT /ee_categories/1.json
  def update
    respond_to do |format|
      if @ee_category.update(ee_category_params)
        format.html { redirect_to @ee_category, notice: 'Ee category was successfully updated.' }
        format.json { render :show, status: :ok, location: @ee_category }
      else
        format.html { render :edit }
        format.json { render json: @ee_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ee_categories/1
  # DELETE /ee_categories/1.json
  def destroy
    @ee_category.destroy
    respond_to do |format|
      format.html { redirect_to ee_categories_url, notice: 'Ee category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ee_category
      @ee_category = EeCategory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def ee_category_params
      params.require(:ee_category).permit(:ee_category_id, :name)
    end
end

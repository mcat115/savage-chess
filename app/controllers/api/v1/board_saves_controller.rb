class Api::V1::BoardSavesController < ApiController
  before_action :authenticate_user

  def index
    render json: BoardSave.where(user_id: current_user.id)
  end

  def create
    new_board_save = BoardSave.new(position: params[:board_safe], user_id: current_user.id)

    if new_board_save.save 
      render json: new_board_save
    else
      render json: { error: new_board_save.errors.full_messages }
    end
  end

  def destroy
    save_to_delete = BoardSave.find(params[:id])

    if save_to_delete.destroy
      render json: BoardSave.where(user_id: current_user.id)
    else
      render json: { error: save_to_delete.errors.full_messages }
    end
  end

  private 

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end

end
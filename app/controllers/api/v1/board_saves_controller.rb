class Api::V1::BoardSavesController < ApiController
  before_action :authenticate_user

  def index
    render json: BoardSave.all
  end

  def create
    # new_board_save = BoardSave.create(board_save_params)
    new_board_save = BoardSave.new(board: params[:board])
    if new_board_save.save 
      render json: new_board_save
    end
  end

  private 

  def board_save_params
    params.require(:board_save).permit(:board)
  end

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end

end
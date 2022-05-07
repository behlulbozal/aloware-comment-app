<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Comment;

class CommentController extends Controller
{
    public function comments(){
        $comments = Comment::get();
        return response()->json($comments);
    }
    public function addComment(Request $request){
        $comment = new Comment();
        $comment->name = $request->name;
        $comment->comment = $request->comment;
        $comment->save();

        if($comment){
            return response()->json(['success' => true, 'message' => 'Comment added successfully']);
        }else{
                return response()->json(['success' => false, 'message' => 'Comment not added']);
            }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use Illuminate\Http\Request;

class TasksController extends Controller
{
    public function getAllTasks() {
       
        $tasks = Tasks::get();
        return response($tasks, 200);

    }

    public function createTasks(Request $request) {
    
        $task = new Tasks();
        $task->title = $request->title;
        $task->description = $request->description;
        $task->status = $request->status;
        $task->criadopor = $request->criadopor;
        $task->save();

        return response()->json([
            'message' => "Task record created"
        ], 201);

    }

    public function getTasks($id) {
    
        $task = Tasks::where('id', $id)->first();

        if($task) {
            return response()->json($task, 200);
        } else {
            return response()->json([
                "message" => "Task not found"
            ], 404);
        }

    }

    public function updateTasks(Request $request, $id) {
    
        $task = Tasks::find($id);

        if($task) {

            $task->update([
                'title' => $request->title ?? $task->title,
                'description' => $request->description ?? $task->description,
                'status' => $request->status ?? $task->status,
            ]);

            return response()->json([
                "message" => "Task updated successfully"
            ], 200);
        } else {

            return response()->json([
                'message' => "Task not found"
            ], 404);
        }

    }

    public function deleteTasks ($id) {
    
        $task = Tasks::find($id);

        if($task) {

            $task->delete();

            return response()->json([
                "message" => "Task deleted"
            ], 200);
        } else {

            return response()->json([
                'message' => "Task not found"
            ], 404);
        }

    }
}

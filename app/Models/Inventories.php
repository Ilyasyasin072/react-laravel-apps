<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inventories extends Model
{
    protected $table = 'inventories';


    public function scopeForDataTable($query) {
        return $query
        ->select([
          'fixups.id',
          'fixups.date',
          'fixups.qty',
          'fixups.notes',
          'fixups.job_id',
          'fixups.weight',
          'fixups.head_division',
          'fixups.qc_divisions_id',
          'fixups.reject',
          'fixups.status_notes',
          'fixups.updated_at',
          'fixups.schedule_id',
          'schedules.machine_id',
          'machines.short_name',
          'fixup_view.alasan_perbaikan',
        ])
        ->leftJoin('schedules', 'schedules.id', '=', 'fixups.schedule_id')
        ->leftJoin('machines', 'machines.id', '=', 'schedules.machine_id')
        ->leftJoin('fixup_reason', 'fixup_reason.fixup_id', '=', 'fixups.id')
        ->leftJoin('reasons', 'reasons.id', '=', 'fixup_reason.reason_id')
        ->leftJoin('fixup_view', 'fixup_view.id', '=', 'fixups.id')
        ->groupBy('fixups.id', 'fixups.date', 'fixups.qty', 'fixups.notes', 'fixups.job_id','fixups.weight','fixups.head_division','fixups.qc_divisions_id','fixups.reject', 'fixups.status_notes', 'fixups.updated_at','fixups.schedule_id','schedules.machine_id','machines.short_name','fixup_view.alasan_perbaikan')
        ->with('job')
        ->take(200);
      }
}

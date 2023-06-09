package com.svs.Supervision.repository.record;

import com.svs.Supervision.dto.request.record.RecordDetailRequestDto;
import com.svs.Supervision.entity.record.Record;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecordRepositoryQdslRepository {
    List<Record> findAllRecordByCarNumWhereCntZero(String carNum);
    List<Record> findAllRecordByWhereCntZero();

    List<Record> findAllRecordByDetail(RecordDetailRequestDto recordDetailRequestDto);

    List<Record> findAllRecordByDateForStatistics(RecordDetailRequestDto recordDetailRequestDto);
}

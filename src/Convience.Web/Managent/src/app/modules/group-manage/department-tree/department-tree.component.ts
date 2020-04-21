import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NzTreeNodeOptions, NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
import { Department } from '../model/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-tree',
  templateUrl: './department-tree.component.html',
  styleUrls: ['./department-tree.component.scss']
})
export class DepartmentTreeComponent implements OnInit {

  @Output()
  selectedNodeChanged = new EventEmitter<Department[]>();

  nodes: NzTreeNodeOptions[] = [];

  data: Department[] = [];

  selectedNode: NzTreeNode;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.initNodes();
  }

  initNodes() {
    let nodes: NzTreeNodeOptions[] = [{ title: '组织结构', key: null, icon: 'global', expanded: true, children: [] }];
    this.departmentService.getAll().subscribe((result: any) => {
      this.data = result;
      this.makeNodes(null, nodes[0], this.data);
      this.nodes = nodes;
      let selectedData = this.data.filter(department => department.upId == this.selectedNode?.key);
      this.selectedNodeChanged.emit(selectedData);
    });
  }

  makeNodes(upId, node, departments: Department[]) {
    var ms = departments.filter(department => department.upId == upId);
    ms.forEach(department => {
      let data = { title: department.name, key: department.id, icon: 'appstore', children: [] };
      this.makeNodes(department.id, data, departments);
      node.children.push(data);
    });
  }

  treeClick(event: NzFormatEmitEvent) {
    this.selectedNode = event.keys.length > 0 ? event.node : null;
    let selectedData = this.data.filter(department => department.upId == this.selectedNode?.key);
    this.selectedNodeChanged.emit(selectedData);
  }

}